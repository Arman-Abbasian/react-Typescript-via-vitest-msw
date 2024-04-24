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
        return HttpResponse.json([
          { userId: 1, id: 1, title: 'Todo 1', completed: false },
          { userId: 1, id: 2, title: 'Todo 2', completed: true },
        ])
    }),

        //---------------------------------------------------------------------
    //json server
    http.get("http://localhost:4000/posts", () => {
        return HttpResponse.json(
                 [
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
                ])
    }),
]

