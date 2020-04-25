import request from "supertest";
import BookApp from "../src/servers/book";


describe("Test check for book app", () => {
    const path ="/book";
    const body = {
        "title":"Anush6",
        "description":"It is poem"
    }

    it("It should response the GET method for book", async (done) => {
        const response = await request(BookApp).get(path);
        expect(response.status).toBe(200);
        done()
    });

    it("It should right header for book", async () =>{
        const response = await request(BookApp).post(path)
            .send(body)
            .set('Accept',"application/json")
            .expect("Content-Type", /json/);
        expect(response.status).toBe(201);
    });

    it("Throw error doesn't exist object status 404 for book", async () =>{
        const response = await request(BookApp).post(`${path}+"dfg"`|| `${path}/hjhjdfhk`);
        expect(response.status).toBe(404);
    });
});
