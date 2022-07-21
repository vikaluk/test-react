import React, {FC} from 'react';
import {IUser} from "../components/types/types";

interface UserListProps {
    users: IUser[];
}

const UserList: FC<UserListProps> = ({users}) => {
    return (
        <div>
            {users.map(user => 
                <div key={user.id} style={{padding: 15, border: '1px solid gray'}}>
                    {user.id}. {user.name} live in the city {user.address.city} on the {user.address.street}
                </div>
            )}
        </div>
    )
}

export default UserList