import sanityClient from "@sanity/client";


const config = {
    token: "skWp3pAEFbN5jZDFAfJkPvfth6XBBNvV2dsUUErbldkZcP7NT6b5DpSbmDqLgPRvEE9NLAdVpZBykZe7QFEMJUKnFrcNanqoP6WyioEQ4O6wRV6TS4zpJ33uplGUAVYQbBE18WTHDswjAkwce6utiYqORbR3QNvr7Ldee5J6bUuWtuHwu6uS"
};
sanityClient(config);


export default async function createComment(req, res) {

    const { _id } = JSON.parse(req.body);
    const data = await sanityClient
        .Patch(_id)
        .setIfMissing({ likes: 0 })
        .inc({ likes: 1 })
        .commit()
        .catch((error) => console.log(error));
    
    res.status(200).JSON({likes: data.likes});
}