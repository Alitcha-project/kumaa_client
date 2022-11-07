function Button(props) {
  
    return (
    <a href="" className={"btn "+"btn"+props.type}>
        {props.children}
    </a>
  )
}

export default Button;