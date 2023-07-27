import { useNotificationValue } from "../notificationContext"

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  const notificationText = useNotificationValue()
  
  if (notificationText === '' || notificationText === null) {
    return <></>
  } else {
    return (
      <div style={style}>
        {notificationText}
      </div>
    )
  }
}

export default Notification
