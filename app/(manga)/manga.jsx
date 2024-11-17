import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchMangaById  } from '../../api/mangaApi'
import MangaInformation from '../../components/MangaInformation';
import LoadingItem from '../../components/LoadingItem';

const Manga = ({id}) => {

    const [mangaData, setMangaData] = useState(null);
    
    useEffect(() => {
        // Fetch manga data when the component mounts
        const loadMangaData = async () => {
            try {
                const response = await fetchMangaById("d45d8e92-e5c7-4458-b5a7-7d1ec2a4bf78");
                setMangaData(response.data);
            } catch (error) {
                console.error("Error fetching manga:", error);
            }
        };

        loadMangaData();
    }, []);


    return (
        <View>
            
            {mangaData ? (
                <>
                    <MangaInformation
                        data={mangaData}
                    />
                </>
            ) : (
                <LoadingItem />
            )}
            
        </View>
    )
}

export default Manga