import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return(
        <div className =" ui container comments">
            <ApprovalCard >
           <CommentDetail  author ="Sam"
            timeAgo= "today at 4:45pm"
            comment="great job"
            avatar = {faker.image.avatar()}/>
             </ApprovalCard>


             <ApprovalCard >
            
             <CommentDetail  
            author ="Nada"
             timeAgo= "yesterday at 5:00pm"
             comment="nice post continu"
             avatar = {faker.image.avatar()}/>
             </ApprovalCard>

             <ApprovalCard >
             <CommentDetail 
            author ="Lili" 
            timeAgo= "today at 6:10Am"
            comment="wowooooooo it's so cute"
            avatar = {faker.image.avatar()}/>
             </ApprovalCard>

          


        </div>
    )
};
ReactDOM.render(
    <App />,
    document.getElementById("root")

);