let sampleScript = new ocpu.Snippet("equation<-NULL; pos<-NULL; ing<-NULL; variables<-c(); E1 <- function (x1, x2) 7 * x1 + 11 * x2 + -77; E2 <- function (x1, x2) 10 * x1 + 8 * x2 + -80; E3 <- function (x1, x2) 1 * x1 + 0 * x2 + -9; E4 <- function (x1, x2) 0 * x1 + 1 * x2 + -6; E5 <- function (x1, x2) -150 * x1 + -175 * x2 + 0;   E6 <- function (x1, x2) 366622.20 * x1 + 1500000 * x2 + -511250665; E7 <- function (x1, x2) 0 * x1 + 1500000 * x2 + -409000532; E8 <- function (x1, x2) -366622.20 * x1 + -1500000 * x2 + 0;   A1 <- function (x1, x2) 1 * x1 + 0 * x2 + -100; A2 <- function (x1, x2) 2 * x1 + 4 * x2 + -240; A3 <- function (x1, x2) 0.2 * x1 + -0.8 * x2 + 0; A4 <- function (x1, x2) -20 * x1 + -50 * x2 + 0;  B1 <- function (x1, x2) -1 * x1 + 0 * x2 + -1250; B2 <- function (x1, x2) 0 * x1 + 1 * x2 + -2500; B4 <- function (x1, x2) -1 * x1 + 0.5 * x2 + 0; B3 <- function (x1, x2) 0.05 * x1 + 0.08 * x2 + -5000;  system <- list(B1, B2, B3, B4);  simplex <- function(mat, verbose=TRUE) {   mat = AugCoeffMatrix(mat)$augcoeffmatrix;   mat = cbind(mat[ , 1:ncol(mat)-1], diag(nrow(mat)), mat[ , ncol(mat)]);   print(\"Given matrix\");   print(mat);   for (num in seq(1, 10000, by=1)) {     minNegPos = which.min(mat[nrow(mat), ]);     if(min(mat[nrow(mat), ]) >= 0) {       return();     };          x = mat[ , minNegPos];          x = mat[ , ncol(mat)] / x;          x = x[1:length(x)-1];          minPosPos = which(x == min(x[which(x > 0)]));          mat[minPosPos, ] = mat[minPosPos, ] / mat[minPosPos, minNegPos];          for (i in seq(1, nrow(mat), by=1)) {       if (i == minPosPos) next;       mat[i, ] = mat[i,] - (mat[i, minNegPos] * mat[minPosPos, ]);      };          print(paste(\"Iteration \", num));      print(mat); return(mat);  };          };      AugCoeffMatrix <- function(system) {      for (i in seq(1, length(system), by=1)) {          current <- unlist(system[i]);     current <- deparse(current);          for (x in seq(2, length(current), by=1)) {       equation <- paste(equation, current[x], sep=\"\");     };     current = equation;     equation = NULL;          substr(current, nchar(current), nchar(current)) = \" \";          current <- strsplit(current, \"\\\\s+\");     current <- unlist(current);          variableIndex = grep(\"x\", current);          if (i > 1) {       if (csize != length(variableIndex)+1) {       };     };          csize <- length(variableIndex)+1;          for (x in seq(1, length(variableIndex), by=1)) {       pos[length(pos)+1] = as.numeric(substr(current[variableIndex[x]], 2, 2));     };          for (x in seq(1, length(variableIndex), by=1)) {       ing[length(ing)+1] = as.numeric(current[variableIndex[pos[x]]-2]);     };     for (x in seq(1, length(current), by=1)) {       if (substr(current[x], 1, 1) != \"x\") {         if (x == length(current)) {           ing[length(ing)+1] = current[x];         } else if (grepl(\"\\\\+\", current[x+1])) {            ing[length(ing)+1] = current[x];         };       };     };               pos = c();   };      ing <- as.numeric(ing);      for (i in seq(csize, length(ing), by=csize)) {     ing[i] = ing[i] * -1;   };      mat = matrix(c(ing), nrow=length(system), ncol=csize, byrow=TRUE);      for (i in seq(1, csize-1, by=1)) {     variables[length(variables)+1] = paste(\"x\", i, sep=\"\");   };         rownames(mat) <- 1:length(system);   colnames(mat) <- c(variables, \"RHS\");      return(list(variables=variables, augcoeffmatrix=mat));    }; simplex(system);");
let sampleScript2 = new ocpu.Snippet("E1 <- function (x1, x2) 7 * x1 + 11 * x2 + -77; E2 <- function (x1, x2) 10 * x1 + 8 * x2 + -80; E3 <- function (x1, x2) 1 * x1 + 0 * x2 + -9; E4 <- function (x1, x2) 0 * x1 + 1 * x2 + -6; E5 <- function (x1, x2) -150 * x1 + -175 * x2 + 0;   E6 <- function (x1, x2) 366622.20 * x1 + 1500000 * x2 + -511250665; E7 <- function (x1, x2) 0 * x1 + 1500000 * x2 + -409000532; E8 <- function (x1, x2) -366622.20 * x1 + -1500000 * x2 + 0;   A1 <- function (x1, x2) 1 * x1 + 0 * x2 + -100; A2 <- function (x1, x2) 2 * x1 + 4 * x2 + -240; A3 <- function (x1, x2) 0.2 * x1 + -0.8 * x2 + 0; A4 <- function (x1, x2) -20 * x1 + -50 * x2 + 0;  B1 <- function (x1, x2) -1 * x1 + 0 * x2 + -1250; B2 <- function (x1, x2) 0 * x1 + 1 * x2 + -2500; B4 <- function (x1, x2) -1 * x1 + 0.5 * x2 + 0; B3 <- function (x1, x2) 0.05 * x1 + 0.08 * x2 + -5000;  C1 <- function (x1, x2) 60 * x1 + 60 * x2 + -300; C2 <- function (x1, x2) 12 * x1 + 6 * x2 + -36; C3 <- function (x1, x2) 10 * x1 + 30 * x2 + -90; C4 <- function (x1, x2) 0.12 * x1 + 0.15 * x2 + 0;  system <- list(C1, C2, C3, C4); system2 <- list(E1, E2, E3, E4, E5);  simplex <- function(mat, verbose=TRUE) {   mat = AugCoeffMatrix(mat)$augcoeffmatrix;      mat = t(mat);      mat[nrow(mat), ] = mat[nrow(mat), ] * -1;      mat = cbind(mat[ , 1:ncol(mat)-1], diag(nrow(mat)), mat[ , ncol(mat)]);      print(\"Given matrix\");   print(mat);   for (num in seq(1, 10000, by=1)) {     minNegPos = which.min(mat[nrow(mat), ]);     if(min(mat[nrow(mat), ]) >= 0) {       return();     };          x = mat[ , minNegPos];          x = mat[ , ncol(mat)] / x;          x = x[1:length(x)-1];          minPosPos = which(x == min(x[which(x > 0)]));          mat[minPosPos, ] = mat[minPosPos, ] / mat[minPosPos, minNegPos];          for (i in seq(1, nrow(mat), by=1)) {       if (i == minPosPos) next;       mat[i, ] = mat[i,] - (mat[i, minNegPos] * mat[minPosPos, ]);      };          print(paste(\"Iteration \", num));      print(mat);     return(mat);   };          };  equation <- NULL; pos <-NULL;  AugCoeffMatrix <- function(system) {      for (i in seq(1, length(system), by=1)) {          current <- unlist(system[i]);     current <- deparse(current);          for (x in seq(2, length(current), by=1)) {       equation <- paste(equation, current[x], sep=\"\");     };     current = equation;     equation = NULL;          substr(current, nchar(current), nchar(current)) = \" \";          current <- strsplit(current, \"\\\\s+\");     current <- unlist(current);          variableIndex = grep(\"x\", current);          if (i > 1) {       if (csize != length(variableIndex)+1) {       };     };          csize <- length(variableIndex)+1;          for (x in seq(1, length(variableIndex), by=1)) {       pos[length(pos)+1] = as.numeric(substr(current[variableIndex[x]], 2, 2));     };          for (x in seq(1, length(variableIndex), by=1)) {       ing[length(ing)+1] = as.numeric(current[variableIndex[pos[x]]-2]);     };     for (x in seq(1, length(current), by=1)) {       if (substr(current[x], 1, 1) != \"x\") {         if (x == length(current)) {           ing[length(ing)+1] = current[x];         } else if (grepl(\"\\\\+\", current[x+1])) {            ing[length(ing)+1] = current[x];         };       };     };               pos = c();   };      ing <- as.numeric(ing);      for (i in seq(csize, length(ing), by=csize)) {     ing[i] = ing[i] * -1;   };      mat = matrix(c(ing), nrow=length(system), ncol=csize, byrow=TRUE);      for (i in seq(1, csize-1, by=1)) {     variables[length(variables)+1] = paste(\"x\", i, sep=\"\");   };         rownames(mat) <- 1:length(system);   colnames(mat) <- c(variables, \"RHS\");      return(list(variables=variables, augcoeffmatrix=mat)); simplex(system);    }");
let sampleScript3 = new ocpu.Snippet("equation<-NULL; pos<-NULL; ing<-NULL; variables<-c(); E1 <- function (x1, x2) 7 * x1 + 11 * x2 + -77; E2 <- function (x1, x2) 10 * x1 + 8 * x2 + -80; E3 <- function (x1, x2) 1 * x1 + 0 * x2 + -9; E4 <- function (x1, x2) 0 * x1 + 1 * x2 + -6; E5 <- function (x1, x2) -150 * x1 + -175 * x2 + 0;   E6 <- function (x1, x2) 366622.20 * x1 + 1500000 * x2 + -511250665; E7 <- function (x1, x2) 0 * x1 + 1500000 * x2 + -409000532; E8 <- function (x1, x2) -366622.20 * x1 + -1500000 * x2 + 0;   A1 <- function (x1, x2) 1 * x1 + 0 * x2 + -100; A2 <- function (x1, x2) 2 * x1 + 4 * x2 + -240; A3 <- function (x1, x2) 0.2 * x1 + -0.8 * x2 + 0; A4 <- function (x1, x2) -20 * x1 + -50 * x2 + 0;  B1 <- function (x1, x2) -1 * x1 + 0 * x2 + -1250; B2 <- function (x1, x2) 0 * x1 + 1 * x2 + -2500; B4 <- function (x1, x2) -1 * x1 + 0.5 * x2 + 0; B3 <- function (x1, x2) 0.05 * x1 + 0.08 * x2 + -5000;  system <- list(B1, B2, B3, B4);  simplex <- function(mat, verbose=TRUE) {   mat = AugCoeffMatrix(mat)$augcoeffmatrix; mat = t(mat); mat[nrow(mat), ] = mat[nrow(mat), ] * -1;   mat = cbind(mat[ , 1:ncol(mat)-1], diag(nrow(mat)), mat[ , ncol(mat)]);   print(\"Given matrix\");   print(mat);   for (num in seq(1, 10000, by=1)) {     minNegPos = which.min(mat[nrow(mat), ]);     if(min(mat[nrow(mat), ]) >= 0) {       return();     };          x = mat[ , minNegPos];          x = mat[ , ncol(mat)] / x;          x = x[1:length(x)-1];          minPosPos = which(x == min(x[which(x > 0)]));          mat[minPosPos, ] = mat[minPosPos, ] / mat[minPosPos, minNegPos];          for (i in seq(1, nrow(mat), by=1)) {       if (i == minPosPos) next;       mat[i, ] = mat[i,] - (mat[i, minNegPos] * mat[minPosPos, ]);      };          print(paste(\"Iteration \", num));      print(mat); return(mat);  };          };      AugCoeffMatrix <- function(system) {      for (i in seq(1, length(system), by=1)) {          current <- unlist(system[i]);     current <- deparse(current);          for (x in seq(2, length(current), by=1)) {       equation <- paste(equation, current[x], sep=\"\");     };     current = equation;     equation = NULL;          substr(current, nchar(current), nchar(current)) = \" \";          current <- strsplit(current, \"\\\\s+\");     current <- unlist(current);          variableIndex = grep(\"x\", current);          if (i > 1) {       if (csize != length(variableIndex)+1) {       };     };          csize <- length(variableIndex)+1;          for (x in seq(1, length(variableIndex), by=1)) {       pos[length(pos)+1] = as.numeric(substr(current[variableIndex[x]], 2, 2));     };          for (x in seq(1, length(variableIndex), by=1)) {       ing[length(ing)+1] = as.numeric(current[variableIndex[pos[x]]-2]);     };     for (x in seq(1, length(current), by=1)) {       if (substr(current[x], 1, 1) != \"x\") {         if (x == length(current)) {           ing[length(ing)+1] = current[x];         } else if (grepl(\"\\\\+\", current[x+1])) {            ing[length(ing)+1] = current[x];         };       };     };               pos = c();   };      ing <- as.numeric(ing);      for (i in seq(csize, length(ing), by=csize)) {     ing[i] = ing[i] * -1;   };      mat = matrix(c(ing), nrow=length(system), ncol=csize, byrow=TRUE);      for (i in seq(1, csize-1, by=1)) {     variables[length(variables)+1] = paste(\"x\", i, sep=\"\");   };         rownames(mat) <- 1:length(system);   colnames(mat) <- c(variables, \"RHS\");      return(list(variables=variables, augcoeffmatrix=mat));    }; simplex(system);");

let foodGroup = [
 {
   "name": "Frozen Broccoli",
   "pricePerServing": 0.16,
   "servingSize": "10 Oz Pkg",
   "calories": 73.8,
   "cholesterol": 0,
   "totalFat": 0.8,
   "sodium": 68.2,
   "carbohydrates": 13.6,
   "dietaryFiber": 8.5,
   "protein": 8,
   "vitA": 5867.4,
   "vitC": 160.2,
   "calcium": 159,
   "iron": 2.3,
   "url": "frozen-broccoli.png"
 },
 {
   "name": "Carrots, Raw",
   "pricePerServing": 0.07,
   "servingSize": "1/2 Cup Shredded",
   "calories": 23.7,
   "cholesterol": 0,
   "totalFat": 0.1,
   "sodium": 19.2,
   "carbohydrates": 5.6,
   "dietaryFiber": 1.6,
   "protein": 0.6,
   "vitA": 15471,
   "vitC": 5.1,
   "calcium": 14.9,
   "iron": 0.3,
   "url": "carrots-raw.jpg"
 },
 {
   "name": "Celery, Raw",
   "pricePerServing": 0.04,
   "servingSize": "1 Stalk",
   "calories": 6.4,
   "cholesterol": 0,
   "totalFat": 0.1,
   "sodium": 34.8,
   "carbohydrates": 1.5,
   "dietaryFiber": 0.7,
   "protein": 0.3,
   "vitA": 53.6,
   "vitC": 2.8,
   "calcium": 16,
   "iron": 0.2,
   "url": "celery-raw.png"
 },
 {
   "name": "Frozen Corn",
   "pricePerServing": 0.18,
   "servingSize": "1/2 Cup",
   "calories": 72.2,
   "cholesterol": 0,
   "totalFat": 0.6,
   "sodium": 2.5,
   "carbohydrates": 17.1,
   "dietaryFiber": 2,
   "protein": 2.5,
   "vitA": 106.6,
   "vitC": 5.2,
   "calcium": 3.3,
   "iron": 0.3,
   "url": "frozen-corn.jpg"
 },
 {
   "name": "Lettuce, Iceberg, Raw",
   "pricePerServing": 0.02,
   "servingSize": "1 Leaf",
   "calories": 2.6,
   "cholesterol": 0,
   "totalFat": 0,
   "sodium": 1.8,
   "carbohydrates": 0.4,
   "dietaryFiber": 0.3,
   "protein": 0.2,
   "vitA": 66,
   "vitC": 0.8,
   "calcium": 3.8,
   "iron": 0.1,
   "url": "lettuce-iceberg-raw.jpg"
 },
 {
   "name": "Peppers, Sweet, Raw",
   "pricePerServing": 0.53,
   "servingSize": "1 Pepper",
   "calories": 20,
   "cholesterol": 0,
   "totalFat": 0.1,
   "sodium": 1.5,
   "carbohydrates": 4.8,
   "dietaryFiber": 1.3,
   "protein": 0.7,
   "vitA": 467.7,
   "vitC": 66.1,
   "calcium": 6.7,
   "iron": 0.3,
   "url": "peppers-sweet-raw.png"
 },
 {
   "name": "Potatoes, Baked",
   "pricePerServing": 0.06,
   "servingSize": "1/2 Cup",
   "calories": 171.5,
   "cholesterol": 0,
   "totalFat": 0.2,
   "sodium": 15.2,
   "carbohydrates": 39.9,
   "dietaryFiber": 3.2,
   "protein": 3.7,
   "vitA": 0,
   "vitC": 15.6,
   "calcium": 22.7,
   "iron": 4.3,
   "url": "potatoes-baked.jpg"
 },
 {
   "name": "Tofu",
   "pricePerServing": 0.31,
   "servingSize": "1/4 block",
   "calories": 88.2,
   "cholesterol": 0,
   "totalFat": 5.5,
   "sodium": 8.1,
   "carbohydrates": 2.2,
   "dietaryFiber": 1.4,
   "protein": 9.4,
   "vitA": 98.6,
   "vitC": 0.1,
   "calcium": 121.8,
   "iron": 6.2,
   "url": "tofu.jpg"
 },
 {
   "name": "Roasted Chicken",
   "pricePerServing": 0.84,
   "servingSize": "1 lb chicken",
   "calories": 277.4,
   "cholesterol": 129.9,
   "totalFat": 10.8,
   "sodium": 125.6,
   "carbohydrates": 0,
   "dietaryFiber": 0,
   "protein": 42.2,
   "vitA": 77.4,
   "vitC": 0,
   "calcium": 21.9,
   "iron": 1.8,
   "url": "roasted-chicken.jpg"
 },
 {
   "name": "Spaghetti w/ Sauce",
   "pricePerServing": 0.78,
   "servingSize": "1 1/2 Cup",
   "calories": 358.2,
   "cholesterol": 0,
   "totalFat": 12.3,
   "sodium": 1237.1,
   "carbohydrates": 58.3,
   "dietaryFiber": 11.6,
   "protein": 8.2,
   "vitA": 3055.2,
   "vitC": 27.9,
   "calcium": 80.2,
   "iron": 2.3,
   "url": "spaghetti-with-sauce.jpg"
 },
 {
   "name": "Tomato, Red, Ripe, Raw",
   "pricePerServing": 0.27,
   "servingSize": "1 Tomato, 2-3/5 In.",
   "calories": 25.8,
   "cholesterol": 0,
   "totalFat": 0.4,
   "sodium": 11.1,
   "carbohydrates": 5.7,
   "dietaryFiber": 1.4,
   "protein": 1,
   "vitA": 766.3,
   "vitC": 23.5,
   "calcium": 6.2,
   "iron": 0.6,
   "url": "tomato-red-ripe-raw.jpg"
 },
 {
   "name": "Apple, Raw, w/ Skin",
   "pricePerServing": 0.24,
   "servingSize": "1 Fruit, 3/lb, Wo/Rf",
   "calories": 81.4,
   "cholesterol": 0,
   "totalFat": 0.5,
   "sodium": 0,
   "carbohydrates": 21,
   "dietaryFiber": 3.7,
   "protein": 0.3,
   "vitA": 73.1,
   "vitC": 7.9,
   "calcium": 9.7,
   "iron": 0.2,
   "url": "apple-raw-with-skin.jpg"
 },
 {
   "name": "Banana",
   "pricePerServing": 0.15,
   "servingSize": "1 Fruit, Wo/Skn & Seeds",
   "calories": 104.9,
   "cholesterol": 0,
   "totalFat": 0.5,
   "sodium": 1.1,
   "carbohydrates": 26.7,
   "dietaryFiber": 2.7,
   "protein": 1.2,
   "vitA": 92.3,
   "vitC": 10.4,
   "calcium": 6.8,
   "iron": 0.4,
   "url": "banana.jpg"
 },
 {
   "name": "Grapes",
   "pricePerServing": 0.32,
   "servingSize": "10 Fruits, Wo/Rf",
   "calories": 15.1,
   "cholesterol": 0,
   "totalFat": 0.1,
   "sodium": 0.5,
   "carbohydrates": 4.1,
   "dietaryFiber": 0.2,
   "protein": 0.2,
   "vitA": 24,
   "vitC": 1,
   "calcium": 3.4,
   "iron": 0.1,
   "url": "grapes.jpg"
 },
 {
   "name": "Kiwi, Raw, Fresh",
   "pricePerServing": 0.49,
   "servingSize": "1 Med. Fruit, Wo/Skin",
   "calories": 46.4,
   "cholesterol": 0,
   "totalFat": 0.3,
   "sodium": 3.8,
   "carbohydrates": 11.3,
   "dietaryFiber": 2.6,
   "protein": 0.8,
   "vitA": 133,
   "vitC": 74.5,
   "calcium": 19.8,
   "iron": 0.3,
   "url": "kiwi-raw-fresh.jpg"
 }
]
