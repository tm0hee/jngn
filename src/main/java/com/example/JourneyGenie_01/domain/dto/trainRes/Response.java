package com.example.JourneyGenie_01.domain.dto.trainRes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Response{
    public Header header;
    public Body body;
}