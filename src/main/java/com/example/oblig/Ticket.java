package com.example.oblig;

 class Ticket {
    private String movie;
    private String fName;
    private String lName;
    private String mail;
    private String tel;
    private int num;

    public Ticket(String movie, String fName, String lName, String mail, String tel, int num) {
        this.movie = movie;
        this.fName = fName;
        this.lName = lName;
        this.mail = mail;
        this.tel = tel;
        this.num = num;
    }

    public Ticket() {}

    public String getMail() {
        return mail;
    }

    public String getMovie() {
        return movie;
    }
    public int getNum() {
        return num;
    }
  public String getTel() {
      return tel;
  }
    public String getfName() {
        return fName;
    }
    public String getlName() {
        return lName;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }
    public void setMovie(String movie) {
        this.movie = movie;
    }
    public void setNum(int num) {
        this.num = num;
    }
    public void setTel(String tel) {
        this.tel = tel;
    }
    public void setfName(String fName) {
        this.fName = fName;
    }
    public void setlName(String lName) {
        this.lName = lName;
    }
}
