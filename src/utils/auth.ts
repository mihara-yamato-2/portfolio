// 簡単なハッシュ関数（本番環境ではより強固なハッシュを使用）
export const simpleHash = async (password: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
};

// パスワードを検証する関数
export const verifyPassword = async (
  inputPassword: string,
  hashedPassword: string
): Promise<boolean> => {
  const inputHash = await simpleHash(inputPassword);
  return inputHash === hashedPassword;
};
