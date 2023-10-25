import ReactLoading from 'react-loading';

export default function Loader({h, jc, ai, mt}) {
  return (
    <div style={{ height: h, display: "flex", justifyContent:jc, alignItems: ai, marginTop:mt}}>
          <ReactLoading type={"cylon"} color={"#2874f0"} height={'60px'} width={'60px'} />
    </div>
  )
}
