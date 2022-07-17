import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div className="columns">
      <div
        className="column is-three-fifths-widescreen is-offset-one-fifth-widescreen">
        <div style={{ margin: '18px' }}>
          <Component {...pageProps} />
        </div>    </div>
    </div >
  )
}

export default MyApp
