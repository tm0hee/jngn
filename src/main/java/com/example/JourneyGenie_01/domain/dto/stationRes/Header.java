package com.example.JourneyGenie_01.domain.dto.stationRes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Header{
    public String resultCode;
    public String resultMsg;
}
