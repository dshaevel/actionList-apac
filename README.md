# Action List Amazon Product API Client (apac) - v0.0.2 - David Shaevel
### 2/20/2015

---

#Description

Perform a keyword item search of the Amazon Product API that returns 10 sets of item attributes and images.

Keyword used as input (hard-coded in the index.js file):

    sensodyne

---

#Usage

Install the dependencies.

    npm install

Execute the index.js file.

    node index.js

Output:

    Title ==>Sensodyne Pronamel Gentle Whitening Toothpaste, Alpine Breeze, 4-Ounce Tubes (Pack of 3)<==
    UPC ==>310158850007<==
    Small Image URL ==>http://ecx.images-amazon.com/images/I/41m7KHt757L._SL75_.jpg<==
    Medium Image URL ==>http://ecx.images-amazon.com/images/I/41m7KHt757L._SL160_.jpg<==
    Large Image URL ==>http://ecx.images-amazon.com/images/I/41m7KHt757L.jpg<==
    
    Title ==>Sensodyne Repair and Protect Toothpaste, 3.4 Ounce<==
    UPC ==>310158840404<==
    Small Image URL ==>http://ecx.images-amazon.com/images/I/41RDK8XlBAL._SL75_.jpg<==
    Medium Image URL ==>http://ecx.images-amazon.com/images/I/41RDK8XlBAL._SL160_.jpg<==
    Large Image URL ==>http://ecx.images-amazon.com/images/I/41RDK8XlBAL.jpg<==
    
    Title ==>Sensodyne Pronamel Gentle Whitening Twin Pack Toothpaste, 4 Ounce<==
    UPC ==>310158830573<==
    Small Image URL ==>http://ecx.images-amazon.com/images/I/41pemzRuV3L._SL75_.jpg<==
    Medium Image URL ==>http://ecx.images-amazon.com/images/I/41pemzRuV3L._SL160_.jpg<==
    Large Image URL ==>http://ecx.images-amazon.com/images/I/41pemzRuV3L.jpg<==
    
    Title ==>Sensodyne Maximum Strength & Extra Whitening (pack of 4)
    Net Wt 6.5 oz(184g)per tube<==
    UPC ==>310158084365<==
    Small Image URL ==>http://ecx.images-amazon.com/images/I/51T5gj4EHOL._SL75_.jpg<==
    Medium Image URL ==>http://ecx.images-amazon.com/images/I/51T5gj4EHOL._SL160_.jpg<==
    Large Image URL ==>http://ecx.images-amazon.com/images/I/51T5gj4EHOL.jpg<==
    
    Title ==>Sensodyne Toothpaste for Sensitive Teeth and Cavity Prevention, Maximum Strenth, 6.5 oz (3 Pack)<==
    UPC ==>310158084280<==
    Small Image URL ==>http://ecx.images-amazon.com/images/I/51Gy-8EOgNL._SL75_.jpg<==
    Medium Image URL ==>http://ecx.images-amazon.com/images/I/51Gy-8EOgNL._SL160_.jpg<==
    Large Image URL ==>http://ecx.images-amazon.com/images/I/51Gy-8EOgNL.jpg<==
    
    Title ==>Sensodyne Toothpaste for Sensitive Teeth and Cavity Prevention, Maximum Strength, Full Protection, 4-Ounce Tubes (Pack of 4)<==
    UPC ==>885379948883<==
    Small Image URL ==>http://ecx.images-amazon.com/images/I/419Gtseb5rL._SL75_.jpg<==
    Medium Image URL ==>http://ecx.images-amazon.com/images/I/419Gtseb5rL._SL160_.jpg<==
    Large Image URL ==>http://ecx.images-amazon.com/images/I/419Gtseb5rL.jpg<==
    
    Title ==>Sensodyne Pronamel Toothpaste, Fresh Wave, 4 Ounce<==
    UPC ==>310158830801<==
    Small Image URL ==>http://ecx.images-amazon.com/images/I/41pJkXITvDL._SL75_.jpg<==
    Medium Image URL ==>http://ecx.images-amazon.com/images/I/41pJkXITvDL._SL160_.jpg<==
    Large Image URL ==>http://ecx.images-amazon.com/images/I/41pJkXITvDL.jpg<==
    
    Title ==>Sensodyne Toothpaste for Sensitive Teeth and Cavity Prevention, Maximum Strength, Fresh Mint, 4-Ounce Tubes (Pack of 4)<==
    UPC ==>310158081111<==
    Small Image URL ==>http://ecx.images-amazon.com/images/I/41pWJbpDG3L._SL75_.jpg<==
    Medium Image URL ==>http://ecx.images-amazon.com/images/I/41pWJbpDG3L._SL160_.jpg<==
    Large Image URL ==>http://ecx.images-amazon.com/images/I/41pWJbpDG3L.jpg<==
    
    Title ==>Sensodyne Extra Whitening Twin Pack Toothpaste<==
    UPC ==>310158084143<==
    Small Image URL ==>http://ecx.images-amazon.com/images/I/5151Efnb8NL._SL75_.jpg<==
    Medium Image URL ==>http://ecx.images-amazon.com/images/I/5151Efnb8NL._SL160_.jpg<==
    Large Image URL ==>http://ecx.images-amazon.com/images/I/5151Efnb8NL.jpg<==
    
    Title ==>Sensodyne Toothpaste for Sensitive Teeth and Cavity Prevention, Maximum Strength, Cool Gel, 4-Ounce Tubes (Pack of 4)<==
    UPC ==>310158082040<==
    Small Image URL ==>http://ecx.images-amazon.com/images/I/41fJ61CGVBL._SL75_.jpg<==
    Medium Image URL ==>http://ecx.images-amazon.com/images/I/41fJ61CGVBL._SL160_.jpg<==
    Large Image URL ==>http://ecx.images-amazon.com/images/I/41fJ61CGVBL.jpg<==
    
---

#Changelog

**v0.0.2** AWS Credentials are read in from the file **awsCredentials.json**

**v0.0.1** Initial check in.

- **NOTE:** AWS Credentials need to be copied into the index.js file.


---

#Acknowledgements

The following software may be included in this project:

- [node-apac](https://github.com/dmcquay/node-apac#license)

Use of any of this software is governed by the terms of the license below:

    Copyright 2010 Dustin McQuay. All rights reserved.
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to
    deal in the Software without restriction, including without limitation the
    rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    sell copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    IN THE SOFTWARE.
