import ListScrollVideo from '~/layouts/components/ListScrollVideo';

function Following() {
    console.log('re-render Following');
    if (!!localStorage.getItem('token')) return <ListScrollVideo type="following" />;
    return (
        <div>
            <h1>Đăng nhập đi rồi thấy</h1>
        </div>
    );
}

export default Following;
