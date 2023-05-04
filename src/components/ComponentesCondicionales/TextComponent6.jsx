//condicionales en clases no hay desmontaje

export const TextComponent6 = ({stock = 3}) => {
  return (
    <>
        <h2 className={ ( stock !== 0) ? "alert alert-success" : "alert alert-danger" }> Stock </h2>
    </>
  )
}
