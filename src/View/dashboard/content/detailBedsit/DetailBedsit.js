import React from 'react';
import { Grid, Box, Link, Container } from '@mui/material';
import DetailInfo from './DetailInfo';
import LandLordInfo from './LandLordInfo';
import Footer from '../../footer/Footer';

// import { Paper } from "@mui/material";
const DetailBedsit = () => {
    return (
        <React.Fragment>
            <Grid item xs={2} sx={{ background: '#e3f2fd' }} />
            <Grid item xs={8} height="100vh">
                <Box height="100vh" component="div" sx={{ p: 2, backgroundColor: '#e3f2fd' }}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Container align="left">
                                <Link variant="h6" href="/">
                                    Home
                                </Link>{' '}
                                /
                                <Link variant="h6" href="/landlord">
                                    {' '}
                                    Dark lord
                                </Link>
                            </Container>
                        </Grid>
                        <Grid item xs={12}></Grid>
                        <Grid item xs={12}>
                            <Grid item xs={12}>
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner" style={{ height: '50vh' }}>
                                        <div className="carousel-item active">
                                            <img
                                                width="1200"
                                                height="700"
                                                sx={{
                                                    objectFit: ''
                                                }}
                                                className="d-block w-100"
                                                src="https://behouse.vn/wp-content/uploads/old/phong-tro-dep-2_1615736799.jpg"
                                                alt="First slide"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img
                                                style={{ objectFit: 'cover' }}
                                                className="d-block w-100"
                                                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFRUYGBgaGhwYGBoYGBgaGhgaGBgcGhoZGBkcIS4lHB4rIRkYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQhISExNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NP/AABEIAL4BCQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAgQFBgcBAP/EAEgQAAIAAwQECwQHBgUEAwAAAAECAAMRBBIhMQUiQXEGMlFhcoGRobGywRMjM9EUQlJzkqLwFSRiY8LhNFOCg9IHJVSkQ5Oj/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAJREBAQACAgMAAQMFAAAAAAAAAAECESExAxJBURMikQQjYXGB/9oADAMBAAIRAxEAPwDNLFYGFVYUN8CmB+rXZzERqUux3JQHIgHYBFds1lUqb6FgxvXlxNaAZZ7IltGIihgsxmGJKkmoAxpdOI6oa43bTKadlJDyXLjtmRX4jg82RG8ZiD+zIzEPpHVhIlwsJCwI7C2DKQVhDigryckHpHLuIrleWu4MKwLDymTTFE1ZN+9OKFzLAF1QNl7MNyVONNlYchawq1aOVbdJmKBedZt87TdRFUbhTvMGmS6Mw5/EBvWJ8GN7sduQa7HCkaxgLsduQS5C1WF0OwfZQRZcEAharG0OyESFNZw2eBGRGe7nEFVIIqwRVnTWgVmDEAOMUemB5j+vnFfs09kb6PaByKrHbhXE+u6NKuxEab0Kk5brLXkpmKfZPbh4RtfA2qxS4wDYqcmIB6jq4Hxh4iqRhd7FHg4hmpaS3sJ+sh4j40pkFJz9RB1Dy2usxKE6rE/lOOfjG1rse0PapjCZMCy3ajYlL1OKMGF7HZka5QuzWh3wXBhSqlmDCuAqroBmM6mH7IQWIowLMcQtcTjvjsumBN1cAMVK7Rtw59sTmltm6hqaxBxAwRDnTkMJZd45PdNycoY8oiTUEqKEHLJzzbLx5IG6OK1GHOAdh23eaDoNmDy2GSO3U61wPLlt27IA6FjQ6lcNdiSa8hIu16zuiYmuoOJplyAZtWlCOUQ2mODkpf8AEB2kkU7YFnA43lHT5JCpdJqoFBVMNu3GLjLHtZEt7oJFUOreP2lyOFBhELapdUAJBooGzYo+0hh7wSmhkmScDTWUapxBrgBQfa7Ipr9s/wAI2/upwskDYOxx6xYuC+rPShzqOMTmp2ERELLxw9fQxNaFJExDePGG1tp54Mar3HIVHKQxGJ6NXUWJEIDiQCeWmMMNH8Rd0SUuOnXDmt5Kazq2YrTI7RuOYhaX14r3h9lxXsYY9tYUphcLYMyscFoT66MnONdO0YjrAgqyrwvIQ45VIMDY0HVAw1lM1pS2gS560DKzBHJKhhrCl7AjlhMrpTH9w1I4VqKcsHeVPTjKJg5SKH8Sj0ECE5DmSh/j4v4xhA3KPqU3tHnyJiqGRAyPQ0ZGcULEbVwUjeYXNcMzMMicOcABa90IezbSoYcoxFN/JHVEL6jt6keIhQj1IFhgysKhVI7SBpiQsEQRwLBQIwlKIUqxxBBQIGheAhJXWXr8IOqxxl1l6/CA0RmlNFpNQqy1rjzg7GU7D4xUWD2Y+yn60ptVJmOryKx2Zbx4aEywyt9hWYpVgDXDHI74ZpWf1JcqWIW8QKZkXiNY84xw7YfJKSmK/iqefbWI2cLjmWwvoCRysmOHdjUQSRMuVq5Aq1CTsoc67cIjFqc26VLUChRKVZmMu8Aqhq1UULYlcBQwRJMktdF0tSurhWoNDqiGlstjPT2Q9swJU0WqUJqwZ63RhQ020gugg5W8q3buoQCaiZKLgEtWuOB6xBy64LNnDybtbjMuWApTPnAgTy3xvUbHMHHsx8Y4lkC3rgVAxrtZjqgipZsTjHWk4NevkYGhwHYMD1xrDQ9mSwRUAEEAggbKcuEMdEzfY2pTkrGhx7frHnHXEgaZRFaUFCrA8UgjE7DyRbHrSOXa3T5N1iuGBoMPWkPdHm6ynnBw3w2EwPLRweMorvXDHqoeuDWegpip7R6QsatEj0IlNVQeUA9ohcMVjFhXUTcIfoIa2Iai9EeEO1EdccmQimCCBCCCBYEr07ituPhGVcPm/wC4WjendLWNUn8Rtx8IyrhrdNvtFftjuRY58+K6fFyForhda7PQS5rXR9Vtdfwtl1Ui5aN/6jSnoLVJxyLyzTrusf6jGbm5zRzV5oTaum3aOtdmm42a0gMfqNqN+EjHsMP3Z1+IlR9pcD17D3RhMq79rvie0Xwstdnp7OeWX7EzXXdrYjqIgbrerWpYR+I4J+y2q3VXA9UeeWRmCIp1i4eyJlBarKVJzeSajDaUPzaLVYLYrqHs8/2ks4XXRtVs6ENQjAjKkNKFmhCsLCwS+h4ylDyrV17OMOwwRZNRVSHHKprTfyRqGg1WFUharCrsBnEEFUQlRCxGHZQEeK6y/wCr0jqmFU1l3N6RhdKwJlhzdhEyXUGMDKbLapbzZpnuFGzG6OalMWyFd8N3Wz3hk6mtCVYlSQdtMRXryiKt9o9nMdGVkYMaqVulaYbc8s9sHstoVqC91VoY5M8ssfjuwwxy+pmyS5eV1qYUIRuegpd2VPbDiVYlBdlvAAXmwIAqyqWxAriwFBy8kLsk1FCoJz3iKhQwPdSOaQ0rMlAqrtUgAhqkUJqKEYVqvUN4hccvJl8Lljhj9RlptYQlVZsAMbxpW6BgMQf7QWw2t2Kqy1DG7xdbGlKZA5jkhzJnvMlhmCGtcCtR2w10TaJKWuSk2i3nQYVIF5qDLi40Pygz9WdzX/R/t3qpqpxwYipyY0hraZJYbd10eMTLoQSKilTTKEiSuIP67I7JuOO8u8H3ZZPs3BBV6qaHIjHdkvZE0gAI+YPpEPo55YmBAXvNleYleoEnwiaANRtgfWi7aPastD/CO7CHUR+hnrKXmqO/+8P6wxWQ2RdReiPAQ6AgNn4q9EeEGEdjjvZSiCCEAQQQokWjiGMi4aNW3Wjp+AAjX5w1etR2sIx7hdjbrT9647DSIZ9r+PpCR1RB2k4RK2WwgjKEtUR1nQcvjEpY5CMaVqaVyOVecc8S9jsKjYOyDT5QU4DZ6iBLu6bb0myLcXDIue5RF14LLSzH71vIkVSQ4CAUNSWoaYChWteTZFu4MD92/wBx/KkU0XaVWCACtcjygkHtGMJVY5MygWNKdJMbaQ/SwbqZfUGFl0wBNwnIPQA7mGHUaGKnb7ZMSpSG1h0xMml0cUuIWB6wI3oFzXYyyMx8u2PUiq2PhPIs8tDOd1V6hXQXwKCusq1qKbaGLTY7Uk0XpbJNGZ9mwDqDleQ417InKpotYKvGG4+KwlQCaA4/ZODdh9IrfDi2PKs0x5bMrhcCMxVlBPUDXqgstQEdAjPv+nltmTJetOLUq7VYli5IJVsdoBphs7NAJNRTLGvpAlGqrwz4HLa6TEYJOVborxXWtQrkYgipoefsp9h/6d2lsZlyVjtYO28BKj8wzjXgIS6xrjL2fHy3Gaii2fgPIl3WDzC611qpQk0yUqQAKYb4a6b0KwUEvMeWMWVRLvj+JaJjTk21wxwN6npDK1JqP0W8DG1Ce13tRLPYZZVB7V2XNCGC1G8AGuwgxH2zgt732iOSKhqMasrA5hto5s8NsT1r0SVRXRbwoGdQKEmgJK/xYA89NkCs73hUMKbDy0zFMww2iN/tplUg7jP9dlISHBqcf1yQNb2w9+PjC9emfWce+H2BvMZUIe8wKkEUyNMaHGLKZtSGBqCAR14xBlGKXaIx3sPBqd0P9Fo4lqroVK1XOurXVx3QmVNIuug7SBLAO1ro3lRmdmUL/a/8Uv8AE3yiM0TaURHDgHJhexFRXlyjv02X/lr3/OOXzf1Ewutp5dqhZ+Ku4eEGgMgaq7h4QYR7DkpawRYEsFWFaPTRq9a+YRjnCNgbbP8Avn8xjYraaIx5BXsIjGtMuPpMxv5jn8xiGc5X8fRE1aL2eMSVntyADjfhb5RGTJ6kACtajYeWJ2zSBQYQth8qNJ0og2P+BvlHHtiuaLXAbRTaIeSbMvJAbWgBwEDHtOaOpJ1BubzLFx4Lj92H3j+VIpsniDc3nEXPgsP3ZfvH/oEUppUuoj01cIIohE7KAKLSSCxqITaLOiEUFLwIO6og9nGsYFpbNP8AV6RqVQdJKAjEAZ2t6UFOIBllme+Im0aUAdBddHCSrry3ZSC0tDlXDFjkREtpdlEl6k3qWi6ABdIMyWrXsag4ilOeIK1WIGejCZLOrILKWuMPdphrAAnokwlimN4XXRfC21KCk5xPF64hmKpZDfAqXADNqhhiTiQdkXvhBoM2mQ8lZgUspUFheoajnrsjKLKtXB2X/GYMeysbgLMjaxUVOZGBNMMSMTlC3g8QPB3g4lklFKCpcvUFmGSgYkV2VxG3mETYTEGuwjChBrT5DbEPo6az2FWZmLMjVb62IzHPEXIt1olnBw45H1XpzkYHdQQN6ZcAI4whvou1mbKWZdpe2GlRQ0xIw2Q5vjlpv+eUGAbTlwMCmSAylTkQQdxEE0lOEuW7tWiIzGmdFUnCI/QGmktUtZiI6hhWjUw5qjA9XoYYAW0Wqil56dM9lIr+nLGZS35aqdYFlIxappUH7WWcXeamEQelrMzrRaVvKccOKwPpAsbapWbSNcGAGPIB65xIi1GlRcP63wLSOjmAaZdC0FWusSTyEC7nDdFwo6BSNroy1oRtu079sDcNMd9JY2sqoqBTk1WHjhCbHpHXZCqqCt7VUCpBANSM8D3Q1aahF1VAwzSY7DrWtIHLRFINaHLLlw5oFs0f1qV0pI9siqCQVcMCDT6rKMdhqwpz0iK+iW7/ACn/APtf/lFj0DNBciv1Ts2gg+kS/sv4j2v/AMo5PJ4/a7Lf6f25VSTkNw8INAZWQ3Dwg0e088pYMsCQQZYAwi3/AA36JjFLe1Z7j+Y/mMbbbh7t+iYxK1/Gf7x/M0Qz7W8f0SeoCg848REpZ9IqANV/wxHzxgN6+YRM2eQKDCFo5WCS9Kr9h/wwiZaw7GgYUG0U2xISZC8ndDW2oAcBs9Y2PZeDmUdQbj54unBdv3ZOm/iIpMviL0T54uHBJvc05Ce8mHsNFhBhE7KFJCJuUDRjKzZnfDbS7ayf6vSHNnzO+GulePL3P4CBlCSqFpNkua4cpdn3ghAahnyciQRybOyK/blBta3a3b0kC9StLiUvUwrE7phl9g63QWKzCGqaqPbyaimRrUdkMrQsn6QNWYHBljBkKswVcgVBUZYVNOeJ2rYzhIWHjj7xe+YI3JOL2+sYdo/jof5iecRtcmbVAeYwMvgoXQn+Al/dr30hhbRqE/rOHmg2rYJfQXxEM7dxezxECFvad4Mf4aXuPmMUq1215KTWQ4l7QwbarAM4I5cqUi68Gf8ADSuj6mKHpXGQ3OLSexG+cH4NWiUsy0WWbLDgu0u4L2ADOhBLUBwxrgILoKXZ7MEsgdRMRVBW8SSWF6oBxNSTBuD0oATGpjVVrzKtafmPbEXpfG2S/v5NPwVhp0y2OIhJdulzJsyUlb8ogPqkAFheAB24ERHadtExbbJo73Cjky1NAShQAgbTrnsEP0s6ybRMIFWnkzGc/VuKFCgfZAUdZMPYTYtpsQdSuVRmNmMRWm5ToUN9jXKiCmZrU05hhzw7smljOmyvYENJPtBNZlKm8l0Kqk0xxY5Y05oZcNdLKECKWUy5pR6qQCTLD0U5MKMvXEssdLYXc0hZtqLPQojYAVZBhHlmpWhWg/hvDurSIyRpZL5a99XkOfZzmJRLSCBQE1oRUMcM6imYIpjC6PbZwsnBhFmOAlRQGpbaMjTlxIEWv9nH7Y7D84pWgtKvKbUktMLm7myBQReJLFT9k9oiy/tyf/4n/wCy/wDGNJPyHvn+FRTIbhBRApeQ3Dwgoj0HnURYMkBSDJAEm3fDfomMRtR9+/TbzNG2W/4T7oxO0/Gfpv5jEcu1fGc2g0Ub18REhJt5oPdt+X5xHz8hvXxETlnlighWy07K0p/Lf8vzgb2oOTqkUpnTHGJKVLHJDO3KAcPCNj2HBwh1F6J85i38EfhHf6mKevEXcfOYuPBEe66/UxS9NO1hWET8jBFEDn5Qp70Y2ceMM9M8ZeZWh5Z/WGOmAS6qoJNxjQZ7flGpIz/THwx0H758o+kM2FbT/uIOwqPSHml392BQUKVrdF74qZNmBzZZQIWgm0XLkse8C19ml7BqVvUrXniGXbox6O7Dxk+8XziNMs89gox+rGZaONWTpp5hGjyjqDo+kPYTKvcHXP0IDkVAO6BW+Zqda+YR3g89LGRtFzl5BANITNTrXzCEka3mLLwbP7rJ6AigaQesgc8uee26PWL9wfNLNJ+7XwjO7Y/uEH8t/wAzyx6w2uBt5aBoA6sz7z+hYhNINW3IOS0S+6SpiZ0AdR+mfKsQFpeukFH89T2SBDScBvk70sa22TzK/e8r5RJW1v3hPu3/AF3xFaQatvljkUHtmD/jD+2P+8D7t/FIrJz/AAlbx/KL0TT6Kpy95MOGBxlOcO2HVh0P9IsRYl2MouVRbtXdUXNmxqaU64jNGzP3RP8AcP8A6zGJ/g5PZZFFYjXfI02xPyxXw5WcxQrFbZZbCzkmmZmjPcEy640jQxrKQ3QuotFBJA1RgK40EcSyoSSZaEnlRD6Q4lIFwCgDk2bgBsjiywt+u39SU9Qwv2ogDT6Dijv+cA+l/wAK9/zhf0q3vPwqMvIbh4QUCBS8huHhBlj2HjlpBlgKQZIFMFb/AIb7vWMUtBPtn6b+YxtWkj7turzCMTtZ969M77eYxHLtXx9HVpOApnUeIiQkW16D3f5h8ohyW1a0peGznEWOzoKCFHLULTSTD/4m6ivzgD2ouTqlaUzpErLQUhhbBrQ07JwdLxF6J87RcuCXwuv1MUwHUXo/1NFz4JfC6/Uw16GdrEpgNpOBhamEWjIwo0ykesMtIAmfLpXIZdI4w8k7N8ROnX94B/L9Wg5QMVH0rjLU7PZrjzmYD6QhLJM+kF2RwomFrxUgUvHGp2QW3o7oiLjSWjEFwq8c1Y3iBszhhZgDasaH3j9xaOfLtedJPRg1pfTTxEaIran+j0jO9E8aX0l8RF/vah6HpFKnk7oQEWRjsqgHPgtYZaSfV618wh9o9qWLD7a+VYh9ITNWn6zr6Qs6bLuLroY0ssv7oeWM4tJ91JHLLHfOT5RoVgNLGnNJB/JGeW3iSR/DKHbOHygzo97aBwdb3bnlmN3UEV4tXSK/fHulf2ib4MOTKeqkUmPQn62Najm2dUV6U4OkhT/NmdyMIadFOrbM/wC4AciSu+e49IfW+b+8HmlP5khr+zXa1vPcLcF1ADWpuOzhu1z+ER6fRrS6nIyaHrdYvJyhl0j9FsWsklVBZjLm0VRUsfYBKActWEWTQiFJV1hQhmqDmCaGh58YFo+WiWizoihVCzmCqKAYJkBvg4nG89P82Z3OR6RDzdujxTjaRRocK0R0uYaQb2uEQWOJ74Qy9rCZ0/lhl7URmRkvIbh4QRYHL4q7h4QsR6DzhkMFUwBDB1gUwOk/hP1eYRilo+M/TbzGNs0kPdPuHiIxvStnuTc63iWxBUirMKEHdgdopEcu1fG9asAKco8RD6RaJoA1V/EflDCc9QN6+Iids5FBCjlp5bdM/wAsdT/MQIzmdjeW7Sm2vLEpLhjahrYQ2N5Jwc43F5Lv9Tf3i6cEvg9cUq8bijClKnOtbzfOLtwS+D1w16HFPqYHaTgYIIDacjAg3ozlHKIbTz+9/wBr+polpZyiE08feHmlf1NGy7LOlM0rLJRGpq3JSjEZ3nJwz2jHKByUQWgn2is19yERXP2jQswAFOvKOaROCdGSPzTIZ2B/3kH+OZ5XiOU5dGPSa0QRfl71i9u/u36B8sUHQ5o8snmJ6h/eLuhZ1KBSwIum6DkRQ4iGyuqX12eWQgWPE4e0HlERdtdAjG7XA0OOBoeX0iTstlaVZiroy1nuwBIrQg0O7DfETpdxcoABifI0T2f1na3yEJsYVRVjIAA5SZeHfFdk8HHmKgdblwo1TQsbhvAUFcK7otWjPgy/u08og7tDybA2ssq4pWtca1pTOkUjRz10j/u2juDiLy7xn2hXrbyf5lpP5nh9cE32vE54gL4+lPQ4+yWu++fQCJa0PFbW8lomTDkwVVBPISSabB4xfrlzd2yJ6zzLtplueKsuYCaHNmSg3mh7I7cYMxU4M7PQ51dixy5zEWlqFakgnwg30wbI5/Jjcq6/HZjjqpVL/N3w6SzuRg8vre74iID9okbY4umzWhNOqvhErjYr7Spq06KtZGrLVs8VdD4kRCfszSH/AIr/AIk+cHGlCcmA3VBjv7VP2/z/AN42q3AEniruHhBRAZHEXojwgtY7nnFrDhWhssGWBRgdtcmW9VpqnaDGJ201muSTW+23kYiNut/wn6JjD7cPePj9dvMYll2t43kWu0xISp7j63aIjkrDhC3N2H5wT5RMSrU/KOz+8LZ2JqadUMJLNzdv9odSplTQjLHxg6idmukpXUXonzGLtwR+AN8UhuInRPmMXfgkfcDfAvQRPgwG05GChoa2x8DAhr0YvNCrUmIRpwnTXpkUud+PjDi0y2fVArEhorg+FN9ya/ZwpBz4DCbVmdwaE6Zq37q3Foq1xQsaXiaU19vJE3YOBcpWLlEUkk1NZjY50rgMztMWwKAKAUGwDIR6/jENflfaBmcF5VaryZUUbzgN0S+i7GJSXRBg22FK0ZjHTx1FH8Y8rRUtMnUHX5Hi0aebUTp/0mKnpp9QdfkaF+jOl+sOEtOgnlEEcwizYIg/hXyiPO0UhaDNaM/4Pn9+bfPPa5+cXa2WkKKk0iuWZEQMZaqt4ks5oGapqdw5u2DcpC443LaQtFoLE3cuX5fOAeyHJjuhNntKtgD3GH6JAvl2OPimJoLMOSONZ1GyHxFIbtNWvzje5piaPY1bNaxH2jRxQ30G3EZ4ddYl5tquioBPOAKd8Rc/STuxSjINtRnXYcqQvtDzGkm1OdWgHOCBDeh5R2iDuBtpWOavL+YfKB7G0l7OdROivlEGEN7IdROivgIODHa86lrBVgSwVYFaE2/4T9ExiVu+LM6b+Yxttt+G/RPhGJW8+9mdN/MYne1sPr0txDqXSGSLDqVBh6krPLBBpsEckHWO4esKsX1/1sgVmOsd3zgppgnUTonzGLvwRPuOuKMeInRPnMXfgj8Drhb00qfWAT0qKQUGFrAEOx2RVxpjDsmEAx4tC02JRMDY7Y8zQkmFqhQaFLAxC1hWRmnjqp0j4RU9ONqqOc+UxauEGSb28BFZ0hZi4VEUs5Oqq8+ZPVXEwl7NOl/lHVXcPCGVqtYGC4tycm/khE60MdVMKYFt2d3l3wOXZhTbz45wbnroZhvs2Mosbzmp5Ng3COiyJtUdgh4EHJCqc8TuR5IZixIMgIWJNNp7YcUG3wgmoM2p1GB7DoydDymIu0JjnErabSlKK/dEeSu09sC5DMTN0oCM67K5/KIqUhVmvAgZ8p7SYsRlqRTVPX8xEVadB3jVHI20N2m4XaUjTIdOI4I4vavyhPtT9juMLTR8wCmqdzGveIT9Am/Zb8S/8oO6OokLC9ZadBfAQ5EM9Gj3adBfCHix6bycuy1MGSBqIKsCtCLd8KZ0G8IxO3/FmfeP5jG2274UzoN4RiWkvjTOm3mieXa3i+kpkN5+cHXKAS8N1T3Q5UYRlKkrGcX/AFsMCs51zuEKsBre/WyBWbjncPEwySYY6idE+cxeOCJ9wN5ijNxE3HzmLvwQPuBvPrAvQRPwtTCI6IQxdY8xjgjjGBTR0mPQkCOtCnKEKBgYMDtVouCtK1y/vAvAzkDStkeZcCsEUXr7HYDSlBtMIs1nSWpVA2PGduO3LuHNzRwOxN4nqGQ3CFqdsc+eW7wtjjrssdm6CK5gN4xwmJ7No4v80DZwNkBx5oTA2Mgpev6EMbaMM+/0hyh283hEXa7VWudBswgWmxgBB2QoMY4kwbQYKtDywDPLXYe0VjrV2GvaIWLOK0NI97MD9H5w0ChgjbUHq8aRy9zt+H+0Eu1jtzmEPsH/2Q=="
                                                alt="Second slide"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img
                                                style={{ objectFit: 'cover' }}
                                                className="d-block w-100"
                                                src="https://tikibook.com/upload/news/112020/kinh-nghiem-tim-phong-tro-gia-re-top-3-website-tim-phong-tro-uy-tin.jpg"
                                                alt="Third slide"
                                            />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <DetailInfo />
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <LandLordInfo />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs={2} sx={{ background: '#e3f2fd' }} />
            <Footer />
        </React.Fragment>
    );
};

export default DetailBedsit;
