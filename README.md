Debouncing:

typing slow=200ms
typing fast=30ms

performance:
- iphone pro max=14 letters *1000=14000
- with debouncing= 3 API calls *1000=3000

debouncing with 200ms
- if the difference between 2 key stroke is <200mx = decline API call
->200ms make API call