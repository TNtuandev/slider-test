import Link from "next/link";

export default function Home() {
  return (
      <div style={{display: "flex", justifyContent: "center", background: "white", height: "100vh", alignItems: "center"}}>
          <button style={{background: "red", height: 100, width: 100}}>
              <Link replace={false} href="https://demo-sso.tinasoft.io/login" target="_blank">Home</Link>
          </button>
      </div>
  )
}
