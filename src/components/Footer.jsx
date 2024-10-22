export default function Footer(props) {
  const { showModel, handleToggleModel, data } = props;
  return (
    <footer>
      <div className="bgGradient"></div>
      <>
        <h1>NASA DAY</h1>
        <h2>{data?.title}</h2>
      </>
      <button onClick={handleToggleModel}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
