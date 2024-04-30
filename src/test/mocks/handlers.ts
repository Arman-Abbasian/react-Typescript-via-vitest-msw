import { http, HttpResponse } from 'msw';

export const handlers = [
    //---------------------------------------------------------------------
    //json placeholder
    http.get("https://jsonplaceholder.typicode.com/todos", () => {
        return HttpResponse.json([
          { userId: 1, id: 1, title: 'Todo 1', completed: false },
          { userId: 1, id: 2, title: 'Todo 2', completed: true },
        ])
    }),

        //---------------------------------------------------------------------

    //json server--GET
    http.get("http://localhost:4000/posts", () => {
        return HttpResponse.json([
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
    //json server--POST
    http.post("http://localhost:4000/posts", () => {
        return HttpResponse.json([
                  {
                    "userId": 1,
                    "id": "3",
                    "title": "post response",
                    "body": "this is response when i post the data to json-server"
                  },
                ])
    }),
]

