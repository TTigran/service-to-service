import request from "supertest";
import app from "../src/index";

describe("Test check 1", () => {
    const path ="/book";
    // const body = {
    //     "id":2,
    //     "name":"Raffi",
    //     "book":["Samvel","Xent"]
    // }

    it("It should response the GET method 1", async (done) => {
        const response = await request(app).get(path);
        expect(response.status).toBe(200);
        done()
    });

    // it("It should right header", async () =>{
    //     const response = await request(app).post(path)
    //         .send(body)
    //         .set('Accept',"application/json")
    //         .expect("Content-Type", /json/);
    //     expect(response.status).toBe(201);
    // });
    //
    //
    // it("Throw error doesn't exist object status 404", async () =>{
    //     const response = await request(app).post(`${path}+"dfg"`|| `${path}/hjhjdfhk`);
    //     expect(response.status).toBe(404);
    // });
});
