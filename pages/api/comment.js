import sanityClient from "@sanity/client";

export default async function createComment(req, res) {
  const { _id, name, email, comment } = JSON.parse(req.body);

  const config = {
    projectId: "3jk4lurs",
    dataset: "production",
    useCdn: false,
    token: process.env.SANITY_API_TOKEN
  };

  const client = sanityClient(config);

  try {
    await client.create({
      _type: 'comment',
      blog: {
        _type : "reference",
        _ref: _id,
      },
      name,
      email,
      comment,
    });
  } catch (err) {
    console.error(err)
    return res.status(500).json({message: `Couldn't submit comment`, err})
  }
  console.log('Comment submitted')
  return res.status(200).json({ message: 'Comment submitted' })
}
