package com.webmister.semicolon.request;

import lombok.Data;

@Data
public class FriendSaveRequest {
    Long followId;
    Long followerId;
}
