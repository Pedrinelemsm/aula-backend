const supertest = require('supertest');

const app = require('./index');

const request = supertest(app);
 
test("Deve retornar 200 no get /", async function(){
    const response = await request.get("/");
    expect(response.status).toBe(200);
});

test("Deve retornar 201 no post /", async function(){
    const response = await request.post("/");
    expect(response.status).toBe(201);

});

test("Deve retornar 200 no put /", async function(){
    const response = await request.put("/");
    expect(response.status).toBe(200);
})
