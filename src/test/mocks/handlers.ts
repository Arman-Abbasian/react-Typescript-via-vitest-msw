import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get('https://dummyjson.com/todos', () => {
        return HttpResponse.json({
            "todos": [
                {
                    "id": 1,
                    "todo": "Do something nice for someone I care about",
                    "completed": true,
                    "userId": 26
                },
            ]
        }, { status: 200 })
    }),

    //---------------------------------------------------------------------
    //json placeholder
    http.get("https://jsonplaceholder.typicode.com/todos", () => {
        return HttpResponse.json({
            "todos": [
                {
                    "id": 1,
                    "todo": "quis ut nam facilis et officia qui",
                    "completed": true,
                    "userId": 26
                },
            ]
        }, { status: 200 })
    }),

        //---------------------------------------------------------------------
    //json server
    http.get("http://localhost:4000/posts", () => {
        return HttpResponse.json({
                "data": [
                  {
                    "userId": 1,
                    "id": "1",
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                  },
                  {
                    "userId": 1,
                    "id": "2",
                    "title": "qui est esse",
                    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                  }
                ],
                "status": 200,
                "statusText": "OK",
                "headers": {
                  "content-length": "23509",
                  "content-type": "application/json"
                },
                "config": {
                  "transitional": {
                    "silentJSONParsing": true,
                    "forcedJSONParsing": true,
                    "clarifyTimeoutError": false
                  },
                  "adapter": [
                    "xhr",
                    "http"
                  ],
                  "transformRequest": [
                    null
                  ],
                  "transformResponse": [
                    null
                  ],
                  "timeout": 0,
                  "xsrfCookieName": "XSRF-TOKEN",
                  "xsrfHeaderName": "X-XSRF-TOKEN",
                  "maxContentLength": -1,
                  "maxBodyLength": -1,
                  "env": {},
                  "headers": {
                    "Accept": "application/json, text/plain, */*"
                  },
                  "method": "get",
                  "url": "http://localhost:4000/posts"
                },
                "request": {}
        }, { status: 200 })
    }),
]

