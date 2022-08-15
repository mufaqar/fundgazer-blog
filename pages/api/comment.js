import client from '../../lib/conn'

export default async function createComment(req, res) {
  const name = JSON.parse(req.body);
  try {
    await client.create({
      _type: 'author',
      name,
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({message: `Couldn't submit comment`, err})
  }
  return res.status(200).json({ message: 'Comment submitted' })
}