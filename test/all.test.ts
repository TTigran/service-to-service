import request from "supertest";
import server from "../src/index";

describe("Test check for author app", () => {
    const path ="/author";
    const body = {
        "id":6,
        "name":"Raffi",
        "book":["Samvel","Xent"]
    }

    it("It should response the GET method", async (done) => {
        const response = await request(server.app).get(path);
        expect(response.status).toBe(200);
        done()
    });

    it("It should right header", async () =>{
        const response = await request(server.app).post(path)
            .send(body)
            .set('Accept',"application/json")
            .expect("Content-Type", /json/);
        expect(response.status).toBe(201);
    });


    it("Throw error doesn't exist object status 404", async () =>{
        const response = await request(server.app).post(`${path}+"dfg"`|| `${path}/hjhjdfhk`);
        expect(response.status).toBe(404);
    });

});



describe("Test check for book app", () => {
    const path ="/book";
    const body = {
        "title":"Anush1",
        "description":"It is poem"
    }

    it("It should response the GET method for book", async (done) => {
        const response = await request(server.app1).get(path);
        expect(response.status).toBe(200);
        done()
    });

    it("It should right header for book", async () =>{
        const response = await request(server.app1).post(path)
            .send(body)
            .set('Accept',"application/json")
            .expect("Content-Type", /json/);
        expect(response.status).toBe(201);
    });

    it("Throw error doesn't exist object status 404 for book", async () =>{
        const response = await request(server.app1).post(`${path}+"dfg"`|| `${path}/hjhjdfhk`);
        expect(response.status).toBe(404);
    });
});
