import { useRouter } from "next/router";

export default function Tag() {
  const router = useRouter();
  
  const {
    query : { tag }
  } = router

  const props = {
    tag
  }

  return (
    <div className='my-20'>tag - {props.tag}</div>
  )
}
