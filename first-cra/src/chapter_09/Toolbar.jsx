import React from "react";

const styles = {
    wrapper: {
        padding: 16,
        display: 'flex',
        flexDirection: 'row',
        borderBottom: '1px solid grey',
    },
    greeting: {
        marginRight: 8,
    },
};

function ToolBar(props) {
    const { isLoggedIn, onClickLogin, onClickLogout } = props;

    return (
        <div style={styles.wrapper}>
            {isLoggedIn && <span style={styles.greeting}> Welcome! Kyoung Yeob </span>}

            {isLoggedIn ?
                (<button onClick={onClickLogout}>Logout</button>) :
                (<button onClick={onClickLogin}>Login</button>)
            }
        </div>
    )
}

export default ToolBar;