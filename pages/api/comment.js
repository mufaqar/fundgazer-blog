import sanityClient from "@sanity/client";

export default async function createComment(req, res) {
  const { _id, name, email, comment } = JSON.parse(req.body);

  const config = {
    projectId: "3jk4lurs",
    dataset: "production",
    useCdn: false,
    token: "skWp3pAEFbN5jZDFAfJkPvfth6XBBNvV2dsUUErbldkZcP7NT6b5DpSbmDqLgPRvEE9NLAdVpZBykZe7QFEMJUKnFrcNanqoP6WyioEQ4O6wRV6TS4zpJ33uplGUAVYQbBE18WTHDswjAkwce6utiYqORbR3QNvr7Ldee5J6bUuWtuHwu6uS"
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
