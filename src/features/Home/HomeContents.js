

   export default function HomeContents({url, alt}) {


const file = url.includes('.jpg' || '.png' || '.webp' || 'jpeg' || '.gif')
const file2 = url.includes('.mov' || '.mp4')
if (file) {
      const Index = url.indexOf('.jpg' || '.png' || '.webp' || 'jpeg');
      if (Index !== -1) {
        url = url.substring(0, Index + 4);
      }

      url = url.replace(/&amp;/g, '&');

        return (
            <>
            <img src={url} alt={alt}  />
            </>
        )
    }
    if (file2) {
            const Index = url.indexOf('.mov' || '.mp4');
      if (Index !== -1) {
        url = url.substring(0, Index + 4);
      }

      url = url.replace(/&amp;/g, '&');

        return (
            <>
            <video src={url} alt={alt}></video>
            </>
        )
    }
    if (!file && !file2) {
        return (
            <>
            </>
        )
    }
    }