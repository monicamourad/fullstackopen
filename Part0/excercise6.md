```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: Then event handler creates a new note, adds it to the notes list then rerenders the note list

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: staus code: 201
    deactivate server
