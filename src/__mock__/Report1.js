var mockServerClient = require("mockserver-client").mockServerClient;

mockServerClient("localhost", 1080).mockAnyResponse({
  httpRequest: {
    method: "GET",
    path: "/users/001/events",
    body: {
      userId: 001,
      from: "",
      to: ""
    }
  },
  httpResponse: {
    statusCode: 200,
    body: {
      id: 0,
      tilte: "example event title",
      description: "I am an example event description",
      organiser: {
        id: 0,
        forename: "John",
        surname: "Doe",
        email: "john.doe@capgemini.com"
      },
      startTime: "2001-12-01T00:00.000Z",
      endTime: "2001-12-01T00:00.000Z"
    }
  }
});
