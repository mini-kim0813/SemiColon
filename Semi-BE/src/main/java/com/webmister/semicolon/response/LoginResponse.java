package com.webmister.semicolon.response;

import com.webmister.semicolon.domain.UserInfo;
import lombok.Data;

@Data
public class LoginResponse {
    String userEmail;
    String password;

    public LoginResponse(UserInfo userInfo){
        this.userEmail = userInfo.getUserEmail();
        this.password = userInfo.getPassword();
    }
}
