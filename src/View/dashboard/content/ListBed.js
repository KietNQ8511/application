import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import CardItem from './CardItem';
import { Autocomplete, Button, TextField, Typography } from '@mui/material';

import axios from 'axios';

const items = [
    {
        title: 'Phòng trọ thường',
        person: 2,
        area: 20,
        price: 1700000,
        image: 'https://cdn.chotot.com/HqfLEQu4uslY0byFL_34fuZKQHF9lb6Z1NbKvPhjOv0/preset:view/plain/72e2cb9a1d8e93b5779a9fe52d34a1e1-2754448744827441675.jpg'
    },
    {
        title: 'Phòng trọ xịn',
        person: 4,
        area: 22,
        price: 2000000,
        image: 'https://cdn.chotot.com/bBEoBDoMC9XXZARjpKvmKGLc5QpsAUihmGMHAaLuygo/preset:view/plain/db423373d392212daf4921fceab75d53-2767673175029929654.jpg'
    },
    {
        title: 'Phòng sang chảnh',
        person: 3,
        area: 25,
        price: 2200000,
        image: 'https://cdn.chotot.com/mUlFa2N52cR3RpnNjgo8WYz44PE78MKu45cT67Gk4Tk/preset:view/plain/f6ef260832cbdcd0a2de0c4ec47ce7a0-2767673175071722744.jpg'
    },
    {
        title: 'Phòng trọ đơn',
        person: 1,
        area: 10,
        price: 1200000,
        image: 'https://cdn.chotot.com/hdiLE8G_KpZm1Rp5i_Rjz3s9rKsNK1Xz5MBNwytrRy8/preset:view/plain/6a93a89a35c93d3dc5e287f157ca280e-2763592246974704804.jpg'
    },
    {
        title: 'Phòng trọ 3 người',
        person: 3,
        area: 23,
        price: 2000000,
        image: 'https://cdn.chotot.com/QDxvzWTJcwaCuocN13GGBJAoTZnFuUI451-i0QRj2yM/preset:view/plain/e115a1b33383d9a18d38185be29220ce-2759525818180193758.jpg'
    },
    {
        title: 'Phòng trọ kiểu homestay',
        person: 3,
        area: 18,
        price: 1800000,
        image: 'https://cdn.chotot.com/3370X-9UQKewCUQY4EEvSsUM-HpMa84kT0LxJBdOP5g/preset:view/plain/c6fb8d9af863fe005614e1388e6ef2cf-2759525760109181480.jpg'
    }
];

const ListBed = () => {
    const [address, setAddress] = useState([]);
    const [ward, setWard] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');

    useEffect(() => {
        axios.get(`https://provinces.open-api.vn/api/?depth=3`).then((res) => {
            setAddress(res.data);
        });
    }, []);

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        axios.get('/room').then((data) => {
            setRooms(data.data);
        });
        console.log(rooms);
    }, []);

    const wards = [
        'Vĩnh Trung',
        'Tân Chính',
        'Thạc Gián',
        'Chính Gián',
        'Tam Thuận',
        'Xuân Hà',
        'An Khê',
        'Hoà Khê',
        'Thanh Khê Đông',
        'Thanh Khê Tây'
    ];
    const districts = [
        'Quận Hải Châu',
        'Quận Cẩm Lệ',
        'Quận Thanh Khê',
        'Quận Liên Chiểu',
        'Quận Ngũ Hành Sơn',
        'Quận Sơn Trà',
        'Huyện Hòa Vang',
        'Huyện Hoàng Sa'
    ];
    const citys = address.map((item) => item.name);

    function handleChangeCity(event, newValue) {
        setCity(newValue);
    }

    const handleChangeDistrict = (event, newValue) => {
        setDistrict(newValue);
    };

    const handleChangeWard = (event, newValue) => {
        setWard(newValue);
    };

    return (
        <React.Fragment>
            <Grid
                container
                item
                xs={12}
                spacing={3}
                alignItems
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mx: 2,
                    bgcolor: 'background.paper',
                    height: 80,
                    borderRadius: 1,
                    marginBottom: 4
                }}
            >
                <Grid item xs={2}>
                    <Typography
                        variant="string"
                        sx={{
                            backgroundColor: '#1976d2',
                            color: '#fff',
                            py: 1.5,
                            px: 1,
                            borderRadius: 2,
                            fontWeight: 'bold'
                        }}
                    >
                        Tìm kiếm nhanh
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Autocomplete
                        // {...defaultProps}
                        id="province"
                        options={citys}
                        onChange={handleChangeCity}
                        value={city}
                        renderInput={(params) => <TextField {...params} label="Province, City" variant="standard" />}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Autocomplete
                        // {...defaultProps}
                        id="province"
                        options={districts}
                        onChange={handleChangeDistrict}
                        value={district}
                        renderInput={(params) => <TextField {...params} label="District" variant="standard" />}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Autocomplete
                        id="ward"
                        options={wards}
                        value={ward}
                        onChange={handleChangeWard}
                        renderInput={(params) => <TextField {...params} label="Ward" variant="standard" />}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained">Tìm kiếm</Button>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                {rooms.map((item) => (
                    <Grid item xs={4}>
                        <CardItem
                            title={item.title}
                            price={item.price}
                            area={item.area}
                            person={item.person}
                            image={item.image}
                            city={item.city}
                            district={item.district}
                            ward={item.ward}
                        />
                    </Grid>
                ))}
            </Grid>
        </React.Fragment>
    );
};

export default ListBed;
