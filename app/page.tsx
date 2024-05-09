import Link from "next/link";
export default function Home() {
  return (
      <div style={{
          display: "flex",
          justifyContent: "center",
          background: "white",
          height: "100vh",
          alignItems: "center"
      }}>
          <script src="../public/testlogin.js"></script>

          <button style={{background: "red", height: 100, width: 100}}>
              <Link replace={false} href="http://localhost:3001/" target="_blank">Home</Link>
          </button>
      </div>
  )
}
