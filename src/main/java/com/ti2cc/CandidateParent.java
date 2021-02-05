package com.ti2cc;

public class CandidateParent {

	private String primeiro_nome;
	private String sobrenome;
	private String CPF;
	private String estado_civil;
	private String data_nascimento;
	private String sexo;
	private String renda;
	/**
	 * @return the primeiro_nome
	 */
	public String getPrimeiro_nome() {
		return primeiro_nome;
	}
	/**
	 * @param primeiro_nome the primeiro_nome to set
	 */
	public void setPrimeiro_nome(String primeiro_nome) {
		this.primeiro_nome = primeiro_nome;
	}
	/**
	 * @return the sobrenome
	 */
	public String getSobrenome() {
		return sobrenome;
	}
	/**
	 * @param sobrenome the sobrenome to set
	 */
	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}
	/**
	 * @return the cPF
	 */
	public String getCPF() {
		return CPF;
	}
	/**
	 * @param cPF the cPF to set
	 */
	public void setCPF(String cpf) {
		CPF = cpf;
	}
	/**
	 * @return the renda
	 */
	public String getRenda() {
		return renda;
	}
	/**
	 * @param renda the renda to set
	 */
	public void setRenda(String renda) {
		this.renda = renda;
	}
	/**
	 * @return the estado_civil
	 */
	public String getEstado_civil() {
		return estado_civil;
	}
	/**
	 * @param estado_civil the estado_civil to set
	 */
	public void setEstado_civil(String estado_civil) {
		this.estado_civil = estado_civil;
	}
	/**
	 * @return the data_nascimento
	 */
	public String getData_nascimento() {
		return data_nascimento;
	}
	/**
	 * @param data_nascimento the data_nascimento to set
	 */
	public void setData_nascimento(String data_nascimento) {
		this.data_nascimento = data_nascimento;
	}
	/**
	 * @return the sexo
	 */
	public String getSexo() {
		return sexo;
	}
	/**
	 * @param sexo the sexo to set
	 */
	public void setSexo(String sexo) {
		this.sexo = sexo;
	}
	public CandidateParent(	String primeiro_nome, String sobrenome, String CPF, String estado_civil, String data_nascimento, String sexo, String renda) {
		this.primeiro_nome = primeiro_nome;
		this.sobrenome = sobrenome;
		this.CPF = CPF;
		this.estado_civil = estado_civil;
		this.data_nascimento = data_nascimento;
		this.sexo = sexo;
		this.renda = renda;
	}
	@Override
	public String toString() {
		return "CandidateParents [primeiro_nome=" + primeiro_nome + ", sobrenome=" + sobrenome + ", CPF=" + CPF
				+  ", estado_civil=" + estado_civil + ", data_nascimento=" + data_nascimento
				+ ", sexo=" + sexo + ", renda=" + renda + "]";
	}

}
