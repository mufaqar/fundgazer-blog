export default {
    name: "team",
    type: "document",
    title: "Team",
    fields: [
        {
          name: "name",
          type: "string",
          title: "Name",
        },
        {
            name: "position",
            type: "string",
            title: "Position",
        },
        {
            title: "Feature Image",
            name: "featureImage",
            type: "image",
            options: {
              hotspot: true, // <-- Defaults to false
            },
        },
    ]
}