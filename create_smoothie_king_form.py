"""Create the Smoothie King Newark team-catering giveaway form via Google Forms API.

Setup:
  1. In Google Cloud Console, enable the Google Forms API.
  2. Create OAuth client credentials (type: Desktop app) and download as
     credentials.json into this directory.
  3. pip install -r requirements.txt
  4. python create_smoothie_king_form.py

First run opens a browser for consent and caches a token in token.json.
Prints the edit URL and responder URL on success.
"""

from __future__ import annotations

import os

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

SCOPES = ["https://www.googleapis.com/auth/forms.body"]
CREDENTIALS_FILE = "credentials.json"
TOKEN_FILE = "token.json"

FORM_TITLE = "Win Free Team Catering \U0001F353 | Smoothie King Newark"

FORM_DESCRIPTION = (
    "Enter to win FREE team catering from Smoothie King (Newark, DE location).\n"
    "Perfect for games, practices, and team events.\n\n"
    "\U0001F381 Winner gets a full team smoothie drop (value $200\u2013$400)\n"
    "\u23F3 Winner announced in 3 days\n\n"
    "Bonus: All teams receive a catering discount just for entering"
)

FINAL_SECTION_TITLE = "Almost Done\u2026"
FINAL_SECTION_DESCRIPTION = (
    "To complete your entry:\n\n"
    "\u2705 Follow @smoothiekingnewark\n"
    "\u2705 Post a story tagging us + your teammates\n\n"
    "This increases your chances of winning \U0001F680"
)


def short_answer(title: str, required: bool = False) -> dict:
    return {
        "title": title,
        "questionItem": {
            "question": {
                "required": required,
                "textQuestion": {"paragraph": False},
            }
        },
    }


def radio(title: str, options: list[str], required: bool = False) -> dict:
    return {
        "title": title,
        "questionItem": {
            "question": {
                "required": required,
                "choiceQuestion": {
                    "type": "RADIO",
                    "options": [{"value": v} for v in options],
                },
            }
        },
    }


def checkboxes(title: str, options: list[str], required: bool = False) -> dict:
    return {
        "title": title,
        "questionItem": {
            "question": {
                "required": required,
                "choiceQuestion": {
                    "type": "CHECKBOX",
                    "options": [{"value": v} for v in options],
                },
            }
        },
    }


def page_break(title: str, description: str) -> dict:
    return {
        "title": title,
        "description": description,
        "pageBreakItem": {},
    }


ITEMS: list[dict] = [
    short_answer("Full Name", required=True),
    short_answer("Phone Number", required=True),
    short_answer("Email Address", required=True),
    radio("Are you part of a team?", ["Yes", "No"], required=True),
    {
        "title": "Team Name / Sport",
        "description": "Example: Wilmington University Basketball",
        "questionItem": {
            "question": {
                "required": True,
                "textQuestion": {"paragraph": False},
            }
        },
    },
    radio("Your Role", ["Player", "Team Captain", "Coach", "Other"]),
    radio("How many people are on your team?", ["5\u201310", "10\u201320", "20\u201340", "40+"]),
    checkboxes(
        "When does your team usually need catering?",
        ["Game days", "Practices", "Events / meetings", "Other"],
    ),
    radio("Have you ordered team catering before?", ["Yes", "No"]),
    checkboxes("Want priority team deals & discounts?", ["Yes, send me offers"]),
    page_break(FINAL_SECTION_TITLE, FINAL_SECTION_DESCRIPTION),
]


def get_credentials() -> Credentials:
    creds: Credentials | None = None
    if os.path.exists(TOKEN_FILE):
        creds = Credentials.from_authorized_user_file(TOKEN_FILE, SCOPES)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(CREDENTIALS_FILE, SCOPES)
            creds = flow.run_local_server(port=0)
        with open(TOKEN_FILE, "w") as f:
            f.write(creds.to_json())
    return creds


def main() -> None:
    creds = get_credentials()
    service = build("forms", "v1", credentials=creds)

    created = service.forms().create(body={"info": {"title": FORM_TITLE}}).execute()
    form_id = created["formId"]

    requests_body: list[dict] = [
        {
            "updateFormInfo": {
                "info": {"description": FORM_DESCRIPTION},
                "updateMask": "description",
            }
        }
    ]
    for index, item in enumerate(ITEMS):
        requests_body.append(
            {"createItem": {"item": item, "location": {"index": index}}}
        )

    service.forms().batchUpdate(
        formId=form_id, body={"requests": requests_body}
    ).execute()

    form = service.forms().get(formId=form_id).execute()
    print(f"Form ID:       {form_id}")
    print(f"Edit URL:      https://docs.google.com/forms/d/{form_id}/edit")
    print(f"Responder URL: {form.get('responderUri')}")


if __name__ == "__main__":
    main()
