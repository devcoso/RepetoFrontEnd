import {Html5QrcodeScanner} from "html5-qrcode";
import {useState , useEffect} from "react";

const QrCoderReader = () => {
    const [scanResult, setScanResult] = useState(null);

    useEffect(() => { 
        const scanner = new Html5QrcodeScanner('reader',{
            qrbox: {
                width: 250,
                height: 250
            },
            fps: 5,
        })
        scanner.render(success, error);

        function success(data){
            scanner.clear()
            setScanResult(data);
        }

        function error(error){
            console.log(error)
        }

    }, [])


    return (
        <>
            <h1>Qr code scaning</h1>
            { scanResult 
            ?   (
                <div>Success: 
                    <a href={'http://'+scanResult}>{scanResult}</a>
                </div>
            )
            :   <div id='reader'></div>
            }
        </>
    )
}
export default QrCoderReader