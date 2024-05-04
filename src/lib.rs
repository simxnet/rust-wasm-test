use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn random_alpha_numeric(length: usize) -> String {
    let mut s = String::new();
    while s.len() < length {
        let random_str: String = js_sys::Math::random()
            .to_string()
            .chars()
            .filter(|c| c.is_alphanumeric())
            .collect();
        s.push_str(&random_str);
    }
    s.chars().take(length).collect()
}
