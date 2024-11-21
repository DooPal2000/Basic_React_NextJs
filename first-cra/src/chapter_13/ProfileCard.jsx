import Card from "./Card";

function ProfileCard(props){
    return(
        <Card title="Kyoung Yeob Kim" backgroundColor="grey">
            <div>
                <p>안녕하세요. 경엽입니다.</p>
                <p>리액트를 활용하여 개발하고 있습니다.</p>
            </div>
        </Card>
    );
}

export default ProfileCard;
