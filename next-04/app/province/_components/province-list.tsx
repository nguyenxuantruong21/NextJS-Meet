"use client";

import { useState } from "react";
import useSWR from "swr";

interface Province {
  province_id: number;
  province_name: string;
}

interface ProvinceResponse {
  results: Province[];
}

interface District {
  district_id: number;
  district_name: string;
}

interface DistrictResponse {
  results: District[];
}

interface Ward {
  ward_id: number;
  ward_name: string;
}

interface WardResponse {
  results: Ward[];
}

// Fetch function with typed response
export const getProvince = async (): Promise<ProvinceResponse> => {
  const response = await fetch(`${process.env.PROVICE_API}/api/province/`);
  if (!response.ok) {
    throw new Error("Fetch failed to /api/province");
  }
  return response.json();
};

const getDistrict = async (provinceId: number): Promise<DistrictResponse> => {
  const response = await fetch(
    `${process.env.PROVICE_API}/api/province/district/${provinceId}`
  );
  if (!response.ok) {
    throw new Error("Fetch to faied /api/province/district/${provinceId}");
  }
  return response.json();
};

const getWard = async (districtId: number): Promise<WardResponse> => {
  const response = await fetch(
    `${process.env.PROVICE_API}/api/province/ward/${districtId}`
  );
  if (!response.ok) {
    throw new Error("Fetch to faied /api/province/ward/${districtId}");
  }
  return response.json();
};

const ProvinceList: React.FC = () => {
  const [provinceId, setProvinceId] = useState(0);
  const [districtId, setDistrictId] = useState(0);

  const { data: provinceRes } = useSWR<ProvinceResponse>(
    "/province",
    getProvince,
    {
      fallback: {},
    }
  );

  const { data: districtRes } = useSWR(
    provinceId ? `/district/${provinceId}` : null,
    () => getDistrict(provinceId),
    {
      fallbackData: {
        results: [],
      },
    }
  );

  const { data: wardRes } = useSWR(
    provinceId ? `/ward/${districtId}` : null,
    () => getWard(districtId),
    {
      fallbackData: {
        results: [],
      },
    }
  );

  const handleChangeProvince = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setProvinceId(Number(event.target.value));
    setDistrictId(0);
  };

  const handleChangeDistrict = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDistrictId(Number(event.target.value));
  };

  return (
    <div>
      <select onChange={handleChangeProvince}>
        <option value="0">Chọn Tỉnh/thành phố</option>
        {provinceRes?.results?.map((province) => (
          <option value={province.province_id} key={province.province_id}>
            {province.province_name}
          </option>
        ))}
      </select>
      <select onChange={handleChangeDistrict}>
        <option value="0">Chọn Quận/huyện</option>
        {districtRes?.results?.map((district) => (
          <option value={district.district_id} key={district.district_id}>
            {district.district_name}
          </option>
        ))}
      </select>
      <select>
        <option value="0">Chọn Xã/Phường</option>
        {wardRes?.results?.map((ward) => (
          <option value={ward.ward_id} key={ward.ward_id}>
            {ward.ward_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProvinceList;
