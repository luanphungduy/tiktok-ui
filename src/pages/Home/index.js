import ListScrollVideo from '~/layouts/components/ListScrollVideo';

function Home() {
    console.log('re-render home');
    return <ListScrollVideo type="for-you" />;
}

export default Home;
/**

Home & Following 
    ListScrollVideo: type 
        - Video Item 
            Mô tả
            Button (nếu chưa follow - Home) -> onclick -> change UI & api (ko re-render)
            Thẻ video
        - Video Item
        - Video Item
        ...

Profile
    Me & Others 
        Info (khác button)
        Nav (Videos / Favourites / Liked)
        ListProfileVideo (Upload & Liked)
            Thẻ video
            Thẻ video
            ....

*/
