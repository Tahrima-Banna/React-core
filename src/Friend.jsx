export default function Friend({friend}){

    const {name,email}=friend;
    console.log(friend);
    return(
        <div className="section">
            <h3>name:{name}</h3>
            <h3>email:{email}</h3>
        </div>
    )
}