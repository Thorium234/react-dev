function StudentCard(props) {
  return (
    <div className="student-card">
      <img src={props.avatarUrl} alt={props.name} className="student-avatar" />
      <h2>{props.name}</h2>
      <p><strong>Major:</strong> {props.major}</p>
      <p><strong>GPA:</strong> {props.gpa}</p>
      <span className={`status ${props.isActive ? 'active' : 'inactive'}`}>
        {props.isActive ? 'Active Student' : 'On Leave'}
      </span>
    </div>
  );
}

export default StudentCard;
