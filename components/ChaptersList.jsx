import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchMangaAggregate  } from '../api/mangaApi'
import ChapterItem from './ChapterItem'
import LoadingItem from './LoadingItem'


const DATA = {
    "volumes": {
        "none": {
            "volume": "none",
            "count": 12,
            "chapters": {
                "65": {
                    "chapter": "65",
                    "id": "c3a1231b-13d3-45e7-8b07-ab7eab118d22",
                    "others": [
                        "25b90bb9-9a6c-43cf-a69f-c5fe452c8d7c",
                        "813ebe80-6504-430d-8f03-d720a3866ed4"
                    ],
                    "count": 3
                },
                "64": {
                    "chapter": "64",
                    "id": "fa993152-8fd7-46e8-961f-a52c97591f0e",
                    "others": [
                        "e1172754-769a-4da9-b102-936d960daba6",
                        "b919e38a-0c85-423d-b230-ab2654251b60",
                        "12abce56-8dda-48a6-87a9-55872cdc36d0"
                    ],
                    "count": 4
                },
                "63": {
                    "chapter": "63",
                    "id": "6c564fdf-f3e0-43b7-ab15-03bf70745893",
                    "others": [
                        "d8bc13b0-f7f0-4524-94ac-a18f5260d47e",
                        "85d8268f-1a76-409a-9713-f581cc5aa8b9",
                        "2d831a64-8180-4e8f-8849-a33fb10c6545",
                        "4a5df7b7-072d-416e-b686-3ede5e7d21ff"
                    ],
                    "count": 5
                }
            }
        },
        "12": {
            "volume": "12",
            "count": 28,
            "chapters": {
                "62": {
                    "chapter": "62",
                    "id": "919c032d-7f4c-496b-8f93-75c27c727bfe",
                    "others": [
                        "6689b301-aa39-48b3-887d-cf4aaa9d11e1",
                        "756379a2-d39d-4919-876a-68ea19ee5a22",
                        "e1b09084-0a22-4b6d-9e63-ca634469b0ac",
                        "304cff27-e00b-45ac-b3ab-0dac6f94e7eb"
                    ],
                    "count": 5
                },
                "61": {
                    "chapter": "61",
                    "id": "9cc280c1-89c7-4720-bb10-9465ab881b37",
                    "others": [
                        "3ad6fa5f-0951-486a-9d0b-ace17d00a716",
                        "8e22d810-38e3-4c60-99af-ac198310903c",
                        "722cd1e1-1276-4bf2-b777-5de29d7f7e5f",
                        "5d68137f-288f-4a88-ae3e-09d96d372e87"
                    ],
                    "count": 5
                },
                "60": {
                    "chapter": "60",
                    "id": "cad2816a-4407-496e-ab09-8c1f4a472b8b",
                    "others": [
                        "cb2f736d-b640-4505-8c67-953bbbe49e95",
                        "53dc884f-bdbc-46a7-90e2-a9071c31f553",
                        "c5792a5b-e5bd-444a-89b9-a047fee907f9",
                        "5e31c602-640b-43e7-a005-67447dc2cfd8",
                        "43310638-755e-41aa-95f2-61f5b39367f5"
                    ],
                    "count": 6
                },
                "59": {
                    "chapter": "59",
                    "id": "25b5712b-668d-4f2b-86a9-daf714f1f8c7",
                    "others": [
                        "90121c07-3fde-4018-a157-3abc69f13e4f",
                        "f2b4f942-0936-4a90-ba8f-1cc30722061b",
                        "295be73f-676d-4c5d-8328-afeccaa21f64",
                        "ddbe8c76-d20f-4134-b1b6-2bdfc30cabce",
                        "d87b7869-2ea0-432c-a764-88f20e76e365"
                    ],
                    "count": 6
                },
                "58": {
                    "chapter": "58",
                    "id": "90f8e3d9-9b5b-4913-868c-86f1e8b8f6bb",
                    "others": [
                        "d291fc53-6e96-4eea-ba4c-ca8babd132e6",
                        "9225bdef-20d9-4330-b04a-e562adcb8538",
                        "480bbfc9-0d78-4113-b0ae-cd239971e8f2",
                        "5c877838-13c6-49b7-86db-2ac7df53af26",
                        "b5b2917d-a76c-4824-9771-986c1b672e28"
                    ],
                    "count": 6
                }
            }
        }
    }
}

//TODO: create Object to represent the manga data and use it instead of this flatData
const flatData = Object.values(DATA.volumes).flatMap((volume) => {
    console.log(volume);
    return Object.values(volume.chapters).map((chapter) => ({
      volume: volume.volume,
      chapter: chapter.chapter,
      id: chapter.id,
      count: chapter.count,
      others: chapter.others,
    }));
  });

  // Step 2: Render item function
  const renderItem = ({ item }) => (
    <View>
      <Text>Volume: {item.volume}</Text>
      <Text>Chapter: {item.chapter}</Text>
      <Text>Count: {item.count}</Text>
      <Text>ID: {item.id}</Text>
    </View>
  );


const ChaptersList = ({id}) => {

    const [mangaAggregateData, setMangaAggregateData] = useState(null);

    useEffect(() => {
        // Fetch manga data when the component mounts
        const loadMangaAggregateData = async () => {
            try {
                const response = await fetchMangaAggregate(id);
                setMangaAggregateData(response.volumes);
            } catch (error) {
                console.error("Error fetching manga aggregate:", error);
            }
        };

        loadMangaAggregateData();
    }, []);

    return (
        <View>
            {mangaAggregateData ? (
                <FlatList
                    data={flatData}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                />
            ) : (
                <LoadingItem />
            )}
        </View>
    )
}

export default ChaptersList