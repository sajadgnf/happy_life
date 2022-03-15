import { CircularProgress, TextField, Autocomplete, Avatar, Paper, InputBase } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import React, { useEffect, useState } from 'react';

// frame
import frame from "../assets/images/frame.svg"

const useStyle = makeStyles({
    bgImage: {
        background: `url(${frame}) no-repeat center`,
        backgroundSize: 'cover',
        height: 276,
        width: "100%",
        position: 'relative'
    },
    searchBox: {
        position: "absolute",
        top: 260,
        left: "50%",
        transform: "translateX(-50%)",
        width: 219,
        height: 32,
        borderRadius: 4
    },
    searchIcon: {
        backgroundColor: "#227872",
        boxShadow: "0.6590743064880371px 0px 9.227041244506836px 0px rgba(0, 0, 0, 0.52) inset, 1.3181486129760742px 1.9772230386734009px 2.6362972259521484px 0px rgba(0, 0, 0, 0.25)",
        padding: 5,
        borderRadius: 10,
        color: '#fff'
    }
})

const Landing = () => {

    const classes = useStyle()
    const [searchBarText, setSearchBarText] = useState(() => window.innerWidth < 720 ?
        "جستوجو..." :
        "نام محصول یا کالای مورد نظر خود را تایپ نمایید..."
    )

    // window resize listener
    useEffect(() => {
        const resizeListener = () => {

            if (window.innerWidth < 720) {
                setSearchBarText("جستوجو...")
            } else {
                setSearchBarText("نام محصول یا کالای مورد نظر خود را تایپ نمایید...")
            }
        }

        window.addEventListener('resize', resizeListener)
    }, [])

    return (
        <div>
            <div className={classes.bgImage}>

                <Paper
                    className={classes.searchBox}
                    component="form"
                    sx={{ p: '4px 8px', display: 'flex', alignItems: 'center' }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder={searchBarText}
                    />
                    <SearchSharpIcon
                        fontSize="medium"
                        className={classes.searchIcon}
                    />
                </Paper>
            </div>
        </div>
    );
};

export default Landing;