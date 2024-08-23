export default {
    name: "comment",
    type: "document",
    title: "Comment",
    fields: [
      {
        name: "name",
        type: "string",
        title: "Name",
      },
      {
        name: "approved",
        type: "boolean",
        title: "Approved",
      },
      {
        name: "email",
        type: "string",
        title: "Email",
      },
      {
        name: "comment",
        type: "string",
        title: "Comment",
      },
      {
        name: "blog",
        type: "reference",
        to: [{ type: "blog" }],
      },
    ]
}