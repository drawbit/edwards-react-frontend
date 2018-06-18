# Edwards

Backend server for Edwards Pump selector.

Create React App based with an express server included for serving the API (`server` directory).

## API

| Path                         | Method | Description                                                                                                |
| ---------------------------- | ------ | ---------------------------------------------------------------------------------------------------------- |
| /api/users                   | POST   | Creates a new User, this is uses to store their details and link seletions                                 |
| /api/selections              | POST   | Starts a Selection, requires a `user_id` and `start` type                                                  |
| /api/selections/:id          | GET    | Returns Selection details                                                                                  |
| /api/selections/:id          | PUT    | Updates Selection, requires `id`, `type` and `value`, these are used for moving through the Selection flow |
| /api/selections/:id/reset    | PUT    | Sets Selection back to defined type, requires `type`                                                       |
| /api/selections/:id/products | GET    | Returns product based on the Selection                                                                     |
| /api/products/:slug          | GET    | Returns Product details                                                                                    |
| /api/requests                | POST   | Creates a Request, requires `selection_id`, `product`, `kind`, `contact`                                   |

### Admin API

| Path                         | Method | Description                                                                                                |
| ---------------------------- | ------ | ---------------------------------------------------------------------------------------------------------- |
| /api/admin/login             | POST   | Returns a Token required for performing Admin tasks                                                        |
| /api/exports                 | GET    | Returns a .csv of all User and Selection data                                                              |
| /api/exports                 | DELETE | Clears all User and Selection data                                                                         |
| /api/admin/products          | ALL    | Epilogue route for Product model                                                                           |
| /api/admin/users             | ALL    | Epilogue route for User model                                                                              |
| /api/admin/requests          | ALL    | Epilogue route for Request model                                                                           |
# Setup

1. Copy .env.example to .env
2. Copy config/config.json.example to config/config.json
3. Run `npm install`
4. Run `npm run setup`
5. Run `npm run start:dev`
